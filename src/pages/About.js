import React from 'react';
import { Button } from '@mui/material';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <h1>Meet Patrick</h1>
      <p>
        Hello! I'm currently a web developer working for Finocomp. I received a
        Distinction Bachelor's degree in Computer Science at the University of
        Wollongong majoring in Cyber Security. In the Autumn of 2021 I interned
        at Finocomp 4 days a week while studying full-time and maintaining a
        weekend job. Currently I am holding a Comptia Security+ certification.
      </p>

      <h3>Skills</h3>
      <li>ReactJS</li>
      <li>Typescript</li>
      <li>Javascript</li>
      <li>Jest Testing</li>
      <li>Spring</li>
      <li>Grails</li>
      <li>Java</li>
      <li>Groovy</li>
      <li>Spock Testing</li>
      <li>Kubernetes</li>

      <Button>Resume</Button>

      <Footer />
    </>
  );
}
