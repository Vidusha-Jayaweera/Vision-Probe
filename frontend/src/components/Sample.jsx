import React, { useState } from 'react'

function Sample() {

    const [img, setImg] = useState('')

    function syncImage(e){
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        reader.onerror = error => {
            console.log('err', error );
        }
    }

    const upload = async() => {
        fetch('http://localhost:3001/marketplace/addProducts', {
            method: 'POST',
            crossDomain: true,
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Access-Control-Allow-Origin" : "*"
            },
            body : JSON.stringify({
                name : "Black Tinted Glass",
                category : "Eye Protection",
                price : 235,
                description : "High Contrast deep dark cooling glass",
                availableStock : 10,
                recommendation : "Christ Wesmith",
                reviews : 20,
                base64Img : img
            })
        })
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            Sample

            <input type='file' accept='image/+' onChange={syncImage}/>

            <button onClick={upload} >upload</button>

        </div>
    )
}

export default Sample