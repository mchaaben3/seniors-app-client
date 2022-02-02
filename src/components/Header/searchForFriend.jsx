import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hint } from 'react-autocomplete-hint';


const SearchForFriend = () => {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  // const getData = async () => {
  //   const res = await axios.get(`http://seniors-app.herokuapp.com/api/users/all`)
  //     var hintArray = []
  //      res.data.map(a => hintArray.push(a.full_name))
  //       setHintData(hintArray)
  // }

  // useEffect(()=> {
  //   getData()
  // },[])
  return (

    <>  
    <Hint options={hintData} allowTabFill>
   
    <input  className="px-3 py-2 flex items-center border border-2 border-gray-900 text-md uppercase font-bold leading-snug  sm:w-96 text-gray-900 "
        value={text}
        placeholder="Search For user"
        onChange={e => setText(e.target.value)} 
        />
      </Hint>
      </>
  
  );
};

export default SearchForFriend;

    