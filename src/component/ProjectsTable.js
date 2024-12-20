import React from 'react';

const ProjectsTable = ({ projects }) => (
    <table>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Percentage Funded</th>
                <th>Amount Pledged</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((project, index) => (
                <tr key={project["s.no"] || index}>
                    <td>{project["s.no"] + 1}</td>
                    <td>{project["percentage.funded"]}</td>
                    <td>{project["amt.pledged"]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default ProjectsTable;
