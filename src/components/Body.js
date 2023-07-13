import React ,{useEffect, useRef, useState} from 'react'
import ReactToPrint from 'react-to-print'
import styles from './Body.module.css'
import Editor from './Editor.js'
import {ArrowDown} from 'react-feather'
import Resume from './Resume'


function Body() {
const colors=[ "#ed8936" , "#48bb78" , "#0bc5ea" ,"#a0aec0" ,"#955de2" ];

const sections ={
   basicInfo:"Basic Info",
   workExp:"Work Experience",
   project:"Projects",
   education:"Education",
   achievement:"Achievement",
   summary:"Summary",
   other:"Other",
};

const resumeRef =useRef();
const [activeColor , setActiveColor]=useState(colors[0]);

const [resumeInformation, setResumeInformation] = useState({
  [sections.basicInfo]: {
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: {},
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: "",
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: "",
  },
});

useEffect(()=>{
  console.log(resumeInformation)
},[resumeInformation])

  return (
    <div className={styles.container}>
      <h1 className={styles.body}>Resume Builder</h1>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
            {colors.map((item)=>(
                <span
                 key={item}
                 style={{backgroundColor: item}}
                 className={`${styles.color} ${
                  activeColor === item ? styles.active : ""
                 }`}
                 onClick={()=>setActiveColor(item)}
                 />
            ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
            <button>Download<ArrowDown/></button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor 
        sections={sections} 
        information={resumeInformation}
        setInformation={setResumeInformation}
        />
        <Resume 
          ref ={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  )
}

export default Body;
