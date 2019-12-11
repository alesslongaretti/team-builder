import React from "react";

const MemberCard = props => {
    return (
        <div className = "member-list">
            {props.team.map((member,index) => (
                <div className="member" key={index}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                    </div>
            ))
            }



        </div>

    )
}
export default MemberCard;