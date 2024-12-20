import React, { useEffect, useState } from 'react';
import { fetchData } from './service/api';
import ProjectsTable from './component/ProjectsTable';
import Pagination from './component/Pagination';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data);
      setProjects(data);
    };
    getData();
  }, []);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="app">
      <h1>Kickstarter Projects</h1>
      <ProjectsTable projects={paginatedProjects} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(projects.length / projectsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
