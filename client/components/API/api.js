

useEffect(async ()=>{
    try{
      const result = await fetch('http://localhost:8080/categories');
      const res = await result.json()
      console.log(res)

    }catch(e){
      console.error(e.message)
    }
     
  },[])