import React, {useState} from 'react'
import Helmet from "../components/Helmet/Helmet";
import { Container, Row,Col,Form,FormGroup } from "reactstrap";
import {Link} from "react-router-dom"
import "../styles/login.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase.config"
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [name,setName] = useState('')
  const[password, setPassword] = useState('')
  const[file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)


  const signup = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,email,password)
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + name}`)
      const uploadTask = uploadBytesResumable(storageRef, file) 
      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
         await updateProfile(user,{
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db,'users', user.uid),{
            uid: user.uid,
            displayName: name,
            email,
            photoURL: downloadURL,

          })
        });
      })
      console.log(user);
    }catch(error){
      toast.error("something went wrong")
    }
  }


  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className="m-auto text-center">
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className="auth__form" onSubmit={signup}>
              <FormGroup className="form__group">
                  <input type='text' placeholder='User Name' 
                  value={name} onChange={e=> setName(e.target.value)}/> 
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='email' placeholder='Enter your email' 
                  value={email} onChange={e=> setEmail(e.target.value)}/> 
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='password' placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)}/>            
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    type='file' 
                    onChange={e=> setFile(e.target.files[0])}/>            
                </FormGroup>

                <button type='submit' className="buy__btn auth_btn">
                  Create an Account
                </button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </Form>
            </Col> 
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup