import React,{useState} from "react";
 export default function Preview(){

    const[preview,setpreview]=useState({
        company:"Reliance Industries",
        name:"Vraj Shah",
        email:"vraj@gmail.com",
        branch:"Information & Communication Technology",
        skills:{
            skill1:"Html",
            skill2:"Css",
            skill3:"Js",
            skill4:"Reactjs",
            skill5:"Tailwind"},
        linkedin:"www.linkedincom/in/vraj-shah-developer",
        github:"https://github.com/Vraj1103",
        role:"Web-Development",
        reason:"I believe that I am a strong candidate for the web development internship because of my skills and experience in web development. In my coursework, I have learned HTML CSS. JavaScript. and Python, and I have completed several projects that        showcase my ability to design and develop responsive web pages. In addition to my technical skills. I am a quick learner and I am always eager to learn programming languages. I am particularly interested in learning more about React and Nodejs. as I see these technologies as critical to the future of web development"
    });

    

    return(
        
        <div className="min-[950px]:m-16">
        <div className="flex justify-between m-12 max-[650px]:flex-col">
        <div>
        <h3 className="text-[#1F3368] max-[770px]:text-2xl text-[2rem] font-semibold">Your application for</h3>
        <h3 className="text-[#F68C1F] max-[770px]:text-3xl text-4xl font-bold border-b-4 border-[#1F3368] pb-2">{preview.company}</h3>
        
        </div>
        <div>
        <button type="button" className="text-[#1F3368] mt-6 max-[770px]:text-xl max-[770px]:mt-4 bg-gray-300 text-2xl m-2 pl-2 pr-2 w-[100%] max-[650px]:m-0 max-[650px]:mt-2 max-[650px]:h-10 font-semibold hover:text-gray-300 hover:bg-[#1F3368] h-12 rounded-md"><a href="#">View company's info</a></button>
        </div>
        </div>
        <div className="m-12 mt-16 ">
        <p className=" text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-10">Name:</span><span className="font-light ">{preview.name}</span></p>
        <p className="text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-10">Email:</span><span className="font-light">{preview.email}</span></p>
        <p className="text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-6">Branch:</span><span className="font-light">{preview.branch}</span></p>
        <p className="text-2xl max-[770px]:text-xl pt-4 flex">
        <div>
        <span className="font-bold pr-10">Top 5 Skills:</span>
        </div>
        <div>
        <span className="font-light">
        <ol className="list-decimal">
        <li className="">{preview.skills.skill1}</li>
        <li className="pt-4">{preview.skills.skill2}</li>
        <li className="pt-4">{preview.skills.skill3}</li>
        <li className="pt-4">{preview.skills.skill4}</li>
        <li className="pt-4">{preview.skills.skill5}</li>
        </ol>
        </span>
        </div>
        </p>
        <p className="text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-5">Linkedin:</span><span className="font-light">{preview.linkedin}</span></p>
        <p className="text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-8">Github:</span><span className="font-light">{preview.github}</span></p>
        <p className="text-2xl max-[770px]:text-xl pt-4"><span className="font-bold pr-6">Role you're applying for:</span><span className="font-light">{preview.role}</span></p>
        <p className="text-2xl pt-4">
        <div>
        <span className="font-bold text-2xl max-[770px]:text-xl pr-10">Why you should get selected ? :</span>
        </div>        
        <span className="font-light max-[770px]:text-xl"><br/>{preview.reason}</span></p>   
        </div>

        </div>
        )
 }