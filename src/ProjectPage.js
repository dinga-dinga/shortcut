import React from 'react'
import './ProjectPage.css'

const ProjectPage = ({person}) => (
    <div className="Page">
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

export default ProjectPage;