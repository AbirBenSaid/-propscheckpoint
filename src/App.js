import React from 'react';
import './App.css';
import Profile from './Profile/Profile'
import ProfilePic from './Profile/MyPic.jpg'


function App (){
var username= "Abir Ben Said"
    function handleName (){
        alert ("This profile'sn user name is :" +username)
    }

return(
<div className="App"> 
<Profile FullName={username} 
Profession=" Marketing and Communication Lead"  Bio=" I'm a 24 years old Tunisian who is passionate with a lot of fields and has lot of hobbies.
I have a baccalaureat in Experimental Science, Bachelor degree in Business English, My last posotion was in the Marketing field, and now i'm studying web development!
I know it's pretty confusing xD But I just enjoy learning about everything! " handleName={handleName} >
<img src={ProfilePic} style={{width:"25%",height:"50%",borderRadius:"17px"}} alt="profilePic" />
</Profile>

</div>

)   

}
export default App

