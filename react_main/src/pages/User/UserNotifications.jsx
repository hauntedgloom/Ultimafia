import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./User";

import "../../css/main.css";

export default function UserNotifications({
  openAnnouncements,
  user,
  SiteNotifs,
}) {
  return (
    <>
      <i
        className="fas fa-bullhorn"
        onClick={() => openAnnouncements()}
        style={{ fontSize: "14px" }}
      />
      <SiteNotifs />
      <div style={{ marginLeft: "6px" }}>
        <Link to="/user" className="profile-link">
          <Avatar id={user.id} name={user.name} hasImage={user.avatar} />
        </Link>
      </div>
    </>
  );
}
