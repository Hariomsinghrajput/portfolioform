

//Resume Records as a array
let Resume=[]
const locals=localStorage
const gets=locals.getItem('resume');

//Form Data as a object
const formData={}
const forminput=document.getElementById("forminput");
const firstnames=document.querySelector('#Firstname');
const lastnames=document.querySelector('#lastname');
const dobs=document.querySelector('.dob');
const emails=document.querySelector('.email');
//  const males=document.querySelector('.male');
//  const females=document.querySelector('.female');
// const Gender=document.querySelector('mygender');
const schools=document.querySelector('.School');
const Degrees=document.querySelector('.Degree');
const Fields=document.querySelector('.Field');
const experiences=document.querySelector('.experience');
const skillss=document.querySelector('.skills');
const Objective1s=document.querySelector('.Objective1');
const Objective2s=document.querySelector('.Objective2');
const Interests=document.querySelector('.Interest');
 const Pro=document.querySelector('.Item');
// console.log(Pro.value);
const Achievments=document.querySelector('.Achievment');
//console.log(formData);





//valuse taken  
const takenvalue =(event) =>{
    const fullName=(formData.firstname=firstnames.value)+" "+(formData.lastname=lastnames.value);
    formData.email=emails.value 
//     formData.mygender=Gender.value=Text
     formData.dob=dobs.value;
    formData.School= schools.value;
    formData.Degree= Degrees.value;
    formData.Field= Fields.value;
    formData.experience= experiences.value;
    formData.skills= skillss.value;
    const Objective=(formData.Objective1s=Objective1s.value)+" "+(formData.Objective2s=Objective2s.value);
    formData.Interest= Interests.value;
    formData.Pro= Pro.value;
    formData.Achievment= Achievments.value;
    
   
  const Resumes=[...Resume , formData];
  
  
  
  if(gets===null)
  {
       const toConvert=JSON.stringify(formData)
       locals.setItem('resume',toConvert);
       location.href="view.html"
  }
  else
  {
       //const toVal=JSON.parse(gets)
     //  const toCombine=[...toVal, formData];
       const newToString=JSON.stringify(formData)
       locals.setItem('resume',newToString)
       location.href="view.html"

  }

  
 }


 let viewData=document.querySelector('.views')
 const toObjs=JSON.parse(gets)
 const {firstname, lastname, email, Achievment, dob, skills, school, experience, Interest, Field, Degree}=toObjs;
 const viewLists = ()=>{
  return ` 
<div class="flex flex-col w-[35%] bg-pink-300 pl-2">
<div class="p-9 w-85 box-border rounded-full bg-stone-300 mx-auto mt-2">
 <span class="textWhite">
    <span class="text-3xl text-Black-900 font-semibold capitalize">${firstname[0]+'.'}${lastname[0]+'.'}</span> 
 </span>
</div>
<h3 class="text-stone-800 mb-1 mt-2 font-semibold text-2xl text-center capitalize">${firstname} ${lastname}</h3>
<div class="mt-2 flex flex-col gap-2">
    <h3 class="text-left text-xl text-stone-800 font-semibold underline">About:-</h3>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Name:-</span>
     <span class="text-sm text-stone-700 font-normal">${firstname} ${lastname}</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Mobile:-</span>
     <span class="text-sm text-stone-700 font-normal">546576970</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Email:-</span>
     <span class="text-sm text-stone-700 font-normal">${email}</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">DOB:-</span>
     <span class="text-sm text-stone-700 font-normal">${dob}</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Degree:-</span>
     <span class="text-sm text-stone-700 font-normal">${Degree}</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Field:-</span>
     <span class="text-sm text-stone-700 font-normal">${Field}</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Designation:-</span>
     <span class="text-sm text-stone-700 font-normal">Developer</span>
    </div>
    <div class="flex gap-0.5">
     <span class="text-sm text-stone-700 font-medium">Experience:-</span>
     <span class="text-sm text-stone-700 font-normal">${experience}</span>
    </div>
    
</div>
</div>
<div class="w-[65%] p-4 bg-stone-500">
 <div class="flex gap-0.5">
     
    </div>
     <div class="gap-0.5 mt-10 ">
     <div class="flex flex-col">
      <span class="text-black-900 font-Bold text-xl">Education:-</span></div>
      <div class="flex flex-col ml-3">
          <span class="text-sm text-stone-700 font-normal"><span class="font-semibold">High School:- </span>${school}</span>
      </div>
     </div>
     <div class="gap-2 mt-16 ">
     <div class="flex flex-col">
      <span class=" text-black-900 font-Bold text-xl">Achivement:-</span>
      <ul class="ml-3 list-disc">
         <li class="text-sm text-stone-700 font-normal ml-3">${Achievment}</li>
     </ul>
     </div>
     </div>
     <div class="gap-0.5 mt-16 ">
     <div class="flex flex-col">
      <span class=" text-black-900 font-Bold text-xl">Skills:-</span>
      <div class="ml-3">
         <span class="text-sm text-stone-700 font-normal">${skills}</span>
     </div>
     </div>
     </div>
     <div class="gap-0.5 mt-16 ">
    <div class="flex flex-col">
     <span class=" text-black-900 font-Bold text-xl">Project:-</span>
     <ul class="ml-3 list-disc">
         <li class="text-sm text-stone-700 font-normal ml-3">1</li>
         <li class="text-sm text-stone-700 font-normal ml-3">2</li>
         <li class="text-sm text-stone-700 font-normal ml-3">3</li>
     </ul>
    </div>
    </div>
    <div class="gap-0.5 mt-16 ">
      <div class="flex flex-col">
          <span class=" text-black-900 font-Bold text-xl">Objective:-</span>
          <div class="ml-3">
             <span class="text-sm text-stone-700 font-normal">School</span>
         </div>s
      </div>
         </div>
         <div class="gap-0.5 mt-10 ">
         <div class="flex flex-col">
          <span class="text-Black-900 font-Bold text-xl">HOBBIES:-</span>
          <ul class="ml-3 text-sm text-Black-500">
          hobbies
         </ul> 
        </div>
 </div>
  </div>
</div> `
  }


viewLists();
//  console.log(viewList())

 viewData.insertAdjacentHTML("beforeend", viewLists())




















//  view the details:
{/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
     </svg> */}
//  function view(Resumes)
//  { 
//        const show=document.querySelector('.button');
//         Resumes.map(ele=>{
//       //console.log(ele.name+'\n')
//        const col=document.createElement('div');
//        col.className='wFull flex justifyStart';
//                show.appendChild(col) 

//     const firstnames=document.createElement('div');
//        firstnames.className='col2';
//         firstnames.innerText=ele.Firstname;
//         col.append(firstnames);
       //  const lastnames=document.createElement('div');
       //  lastnames.className='col2';
       //  lastnames.innerText=ele.lastname;
       //  col.append(lastnames);
//         const myhobbies=document.createElement('div');
//        myhobbies.className='col2';
//        myhobbies.innerText=ele.read;
//        col.append(myhobbies.read);
       //  const email=document.createElement('div');
       //  email.className='col2';
       //  email.innerText=ele.email;
       // col.append(email);
//        const father=document.createElement('div');
//        father.className='col2';
//        father.innerText=ele.father;
//        col.append(father);
//        const mother=document.createElement('div');
//        mother.className='col2';
//        mother.innerText=ele.mother;
//        col.append(mother);
//        const dob=document.createElement('div');
//        dobs.className='col2';
//        dobs.innerText=ele.dob;
//        col.append(dobs);

// })
// }


// const views=document.querySelector('#view').addEventListener('click', function (e){
//    console.log('Clicked');
//   e.preventDefault()
//   window.location.href='/View.html'
//  })
