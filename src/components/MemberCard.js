import React from "react";
import "./MemberCard.css";


const MemberCard = props => {
    return (
        <div className = "member-list">
            {props.team.map((member,index) => (
                <div className="member" key={index}>
                    <p><span>Name: </span>{member.name}</p>
                    <p><span>Email:</span> {member.email}</p>
                    <p className="role"> <span>Role:</span> {member.role}</p>
                    </div>
            ))
            }



        </div>

    )
}
export default MemberCard;