import React, { useState } from 'react'
import NotificationProvider, { useNotification } from 'use-toast-notification';
const App = () => {
  const notification = useNotification()

  const handleSubmit = async (e) => {
    try {
        notification.show({
            message: 'Your delivery is on its way', 
            title: 'Delivery Status',
            variant: 'success'
        })
    } catch(e){
        notification.show({
            message: 'Your delivery could not be processed', 
            title: 'Delivery Status',
            variant: 'error'
        })
    }
  }}
export default function About(prop) {
    let [bStyle,setbStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
        border : 2,
        borderColor : 'black'
    });
    const [name,setName] = useState("");
   
    let [btntext , setbtntext] = useState('Enable Dark Mode');
    function buttonOnClick (e){
      
        e.preventDefault();
        console.log("asdf");
       
      };
    function changemode() {
        // alert("Your file is being uploaded!")
        //NotificationManager.info('Info message');
        if (btntext==='Enable Dark Mode') {
            setbStyle({
                color : 'white',
                backgroundColor : 'black',
                border : 2,
                borderColor : 'white'
            })
            setbtntext('Disable Dark Mode');
        }else{
           setbStyle({
                color : 'black',
                backgroundColor : 'white',
                border : 2,
                borderColor : 'black'
            })
            setbtntext('Enable Dark Mode');
        }
    }
   
    
  return (
    <div>
        <button onClick={buttonOnClick}>
         Push Notification
      </button>
      <NotificationProvider
			config={{
				position: 'top-right',
				isCloseable: false,
				showTitle: true,
				showIcon: true,
				duration: 5,
			}}
		>
            <App/>
        </NotificationProvider>
        <h4 className='mt-2' style={{color : prop.mode==='dark'?'white':'black'}}>About Us</h4>
 <div className="accordion" id="accordionExample" style={bStyle}>
  <div className="accordion-item" style={bStyle}>
    <h2 className="accordion-header" id="headingOne" style={bStyle}>
      <button className="accordion-button" style={bStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={bStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={bStyle}>
    <h2 className="accordion-header" id="headingTwo" style={bStyle}>
      <button style={bStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={bStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button style={bStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container" style={bStyle}>
    <button onClick={changemode} className='btn btn-primary mt-2 mb-2'>{btntext}</button>
</div>
    </div>
  )
}
