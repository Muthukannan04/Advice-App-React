import { useState } from "react";

const QrCode = () => {
    const [img,setImg]=useState("");
    const [loading,setloading]=useState(false);
    const [qrdata,setqrdata]=useState("kanna");
    const [qrsize,setqrsize]=useState("200")
    async function genqr(){
        setloading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(qrdata)}`
            setImg(url)
        }catch(err){
            console.error(err);
        }finally{
            setloading(false);
        }
    }
    function downqr(){
        fetch(img)
        .then((Response)=>Response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error)=>console.error("downloding in qr code .",error))
    }
  return (
    <div className="app-container">
        <h2>Qr Code Generator</h2>
        {loading && <p>Please Wait....</p>}
        {img && <img src={img} className="qr" />}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR Code:</label>
            <input type="text" id="dataInput" value={qrdata} onChange={(e)=>setqrdata(e.target.value)} placeholder="Enter the Data for Qr Code"/>
            <label htmlFor="SizeInput" className="input-label">Image Size (eg.,500)</label>
            <input type="text" id="SizeInput" placeholder="Enter the Image Size" value={qrsize} onChange={(e)=>setqrsize(e.target.value)}/>
            {/* <button className="generate-btn" onClick={()=>{alert("Hi")}}>Genrate QR Code</button> */}
            <button className="generate-btn" onClick={genqr} disabled={loading}>Genrate QR Code</button>
            <button className="download-btn" onClick={downqr}>Downnload QR Code</button>
        </div>
      <p className="footer">Designed by <a href="https://github.com/Muthukannan04">Mk</a></p>
    </div>
  )
}

export default QrCode
