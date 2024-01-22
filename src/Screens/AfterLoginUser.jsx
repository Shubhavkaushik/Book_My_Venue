import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import Footer from '../Components/Footer'

const AfterLoginUser = () => {
  const [search,setSearch]=useState("")
  const [banquetdata,setbanquetData] =useState([])
  const [state, setState] = useState([])
  const [filterdata,setfilterData] =useState([])
  console.log(state,banquetdata)
  const searchStyle = {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  const navigate = useNavigate();
  const handleSearch=()=>{
    var data1=data.filter((x)=>{
      if(search==""){return x;}
      if((x.location==search) ||(x.name == search)){
        return x
      }
    })
    console.log(data1)
    setfilterData(data1)
  }

  
  // const getdata =async ()=>{

  // const response = await fetch("http://localhost:4444/getdata", {
  //   method: 'GET',
  //   headers: {
  //       'Content-Type': 'application/json'
  //   }})
  //  setData(await response.json()) 
  // setfilterData(data)
 
  // };

  // Image={filteritems.Image1}
  // banquetname={filteritems.banquet_name}
  // capacity={filteritems.capacity}
  // location={filteritems.location}
  // description={filteritems.description}
  // Ownername={filteritems.Name}
 
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4444/getdata", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const responseData = await response.json();
     
        setbanquetData(responseData[0]);
        setState(responseData[1]);
       console.log(banquetdata,state);
      } else {
        console.error('Failed to fetch data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);
  

 

  return (
    <div style={{backgroundImage:"https://www.freelogoservices.com/blog/wp-content/uploads/geometriccolor.jpg"}}>
    <>
  <><div><Navbar2></Navbar2></div>
  <br></br>
  <br></br>
  
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div style={{textAlign:"center"}}>
        <input type="text" placeholder="Search" style={searchStyle} onChange={(e)=>setSearch(e.target.value)} />
        <button style={buttonStyle} onClick={handleSearch} >Search</button>
      </div>

<div className='container'>


{
  state.length !== 0
    ? state.map((data) => {
        return (
          <div className='row mb-3' >
            <div key={data._id}    className='fs-3 m-3' >
             <b>{data.StateName}</b> 
            </div>
            <hr />
            <div style={{display:"flex"}}>
            {banquetdata.length !== 0 ? (
              banquetdata
                .filter((item) => item.location === data.StateName) // Removed extra parentheses here
                .map((filteritems) => {
                  return (
                    <div key={filteritems._id} style={{display:"flex"}} >
                      <Card banquetitem ={filteritems}
                      ></Card>
                    </div>
                  );
                })
            ) : (
              <div>No Such Data Found</div>
            )}
            </div>
          </div>
        );
      })
    : ""
}




</div>


</>
<Footer></Footer>
    </>
   
    </div>
  )
}

export default AfterLoginUser