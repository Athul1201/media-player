import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from '../components/Videocard'
import { getALLUploadVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {


  const[allVideos,setALLVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  useEffect(()=>{
    getALLVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getALLVideos=async()=>{
    const result=await getALLUploadVideoAPI()
    console.log(result);
    if(result.status==200){
      setALLVideos(result.data)
    }else{
      console.log("API FAILED");
      setALLVideos([])

    }
    
  }

  // console.log(allVideos);

   const dragOver=(e)=>{
    e.preventDefault();
   }

   const videoDroped=async(e)=>{
    const {videoId,categoryID}=JSON.parse(e.dataTransfer.getData('data'))
    // console.log(videoId,categoryID);
    const {data}=await getCategoryAPI()
    const selectedCategory=data.find(item=>item.id == categoryID)
    // console.log(selectedCategory);
    let result = selectedCategory.allVideos.filter(video=>video.id!== videoId)
    console.log(result);
    let {id,categoryName}=selectedCategory
    let newCategory= {id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryID,newCategory)
    setDropVideoResponse(res);
    
    
    
    
   }



  return (
    <>
    <div>
      <Row  droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDroped(e)}>
     {
      allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={4} lg={3}>
        <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
      )):<p className='text-danger fw-bolder'>Nothimg to Display</p>  
      }

      </Row>
    </div>
    </>
  )
}

export default View
