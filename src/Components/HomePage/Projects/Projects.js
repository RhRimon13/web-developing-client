import React from 'react';
import projectImg from '../../../Images/project image.jpg'

const Projects = () => {
    return (
        <div class="card border-0 mb-3 m-5">
            <h5 className="text-center mb-5" style={{ color: '#16A085', fontSize: '40px', fontFamily: 'Georgia' }}>Our Projects</h5>
            <div class="row g-0 p-2">
                <div class="col-md-4">
                    <img style={{ height: '250px', width: '100%', borderRadius: '10px' }} src={projectImg} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Sample Responsive website</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iste. Sapiente tenetur omnis vero? At, totam praesentium! Sequi, sint voluptate?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;