import React from 'react'
import './ProjectPage.css'
import './DbUtils'

const ProjectPage = () => (
    <div className="Page">
    {RoleBottons(props)}
    <div class="FilterBar">
    <aa>Type</aa>
    <div class="filter_btn">
    חייל
    </div>
    <div class="selected_filter_btn">
    יועץ
    </div>
    <div class="filter_btn">
    מילואים
    </div>
    <br/>
    <aa>Role</aa>
    <div class="filter_btn">
    תוכניתן
    </div>
    <div class="selected_filter_btn">
    קושחיתן
    </div>
    <div class="filter_btn">
    קפ"ט
    </div>
    <div class="selected_filter_btn">
    רש"צ
    </div>
    <div class="filter_btn">
    רמ"ד
    </div>
    </div>
    <div className="Page">
    </div>
    </div>
  );

function RoleBottons(props) {
    const Roles = props.Roles;
    const listItems = Roles.map((role) =>
      <li>{role}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default ProjectPage;