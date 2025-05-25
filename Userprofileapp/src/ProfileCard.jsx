import React, { useState } from "react";

function ProfileCard({name="Default",age="17",bio="default behavuior of biop"}){


	return(
		<>
		<div style={{border:"2px solid", width:"30%", height:"500px", boxSizing: 'border-box', wordBreak:"break-word", padding:"10px"}}>
			<div>
				<h4>Name: {name}</h4>
				<p><b>Age:{age}</b></p>
				<p><b>Bio:</b><Bio bio={bio}/></p>
			</div>
		</div>
		 
		</>
	)
}

function Bio({ bio }) {
  const [showFull, setShowFull] = useState(false);

  const toggleBio = () => setShowFull((prev) => !prev);

  const getDisplayText = () => {
    if (!bio) return "";
    if (showFull || bio.length <= 100) return bio;
    return bio.slice(0, 30) + "…";
  };

  return (
    <p>
      {getDisplayText()}{" "}
      {bio.length > 100 && (
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={toggleBio}
        >
          {showFull ? "Read Less" : "Read More"}
        </span>
      )}
    </p>
  );
}

// export default Bio;


export default ProfileCard