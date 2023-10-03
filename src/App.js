import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    menus: [],
    departments: [],
    department: ''
  });

  useEffect(() => {
    // Assuming you have a function to fetch accessData
    const accessData = fetchAccessData();
    // Assuming you have a function to fetch departmentData
    const departmentData = fetchDepartmentData();
    // Assuming you have a function to fetch menusData
    const menusData = fetchMenusData();

    // Assuming accessData, departmentData, and menusData are in JSON format
    setFormData(prevData => ({
      ...prevData,
      name: accessData.name,
      menus: menusData.map(menu => ({
        name: menu.name,
        checked: true // Assuming you want all menus to be initially checked
      })),
      departments: departmentData // Assuming departmentData is an array of department names
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server
    // Example: sendFormDataToServer(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <select 
          id="department" 
          name="department" 
          value={formData.department} 
          onChange={handleInputChange}
        >
          <option value="">Select Department</option>
          {formData.departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <div>
        {formData.menus.map((menu, index) => (
          <div key={index}>
            <label>
              <input 
                type="checkbox"
                checked={menu.checked}
                onChange={() => setFormData(prevData => ({
                  ...prevData,
                  menus: prevData.menus.map((m, i) => 
                    i === index ? { ...m, checked: !menu.checked } : m
                  )
                }))}
              />
              {menu.name}
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;






import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    menus: [],
    department: ''
  });

  const fetchAccessData = async (username) => {
    // Assuming you have a function to fetch accessData based on the username
    const accessData = await fetchAccessDataByUsername(username);

    if (accessData) {
      setFormData(prevData => ({
        ...prevData,
        name: accessData.name,
        menus: accessData.Menus.map(menu => ({
          name: menu.name,
          checked: true // Assuming you want all menus to be initially checked
        }))
      }));
    }
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      username: value
    }));
    fetchAccessData(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server
    // Example: sendFormDataToServer(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleUsernameChange} 
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          readOnly // Assuming you don't want to allow direct edits
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <select 
          id="department" 
          name="department" 
          value={formData.department} 
          onChange={handleInputChange}
        >
          <option value="">Select Department</option>
          {formData.departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <div>
        {formData.menus.map((menu, index) => (
          <div key={index}>
            <label>
              <input 
                type="checkbox"
                checked={menu.checked}
                onChange={() => setFormData(prevData => ({
                  ...prevData,
                  menus: prevData.menus.map((m, i) => 
                    i === index ? { ...m, checked: !menu.checked } : m
                  )
                }))}
              />
              {menu.name}
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;




yimport React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    menus: [],
    department: ''
  });

  useEffect(() => {
    // Assuming you have a function to fetch accessData and Department data
    const accessData = fetchAccessData();
    const departmentData = fetchDepartmentData();
    const menusData = fetchMenusData();

    // Assuming accessData and departmentData are in JSON format
    setFormData(prevData => ({
      ...prevData,
      name: accessData.name,
      menus: menusData.map(menu => ({
        name: menu.name,
        checked: true // Assuming you want all menus to be initially checked
      })),
      departments: departmentData // Assuming departmentData is an array of department names
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server
    // Example: sendFormDataToServer(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          readOnly // Assuming you don't want to allow direct edits
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <select 
          id="department" 
          name="department" 
          value={formData.department} 
          onChange={handleInputChange}
        >
          <option value="">Select Department</option>
          {formData.departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <div>
        {formData.menus.map((menu, index) => (
          <div key={index}>
            <label>
              <input 
                type="checkbox"
                checked={menu.checked}
                onChange={() => setFormData(prevData => ({
                  ...prevData,
                  menus: prevData.menus.map((m, i) => 
                    i === index ? { ...m, checked: !menu.checked } : m
                  )
                }))}
              />
              {menu.name}
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;








mimport React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    menus: []
  });

  useEffect(() => {
    // Assuming you have a function to fetch accessData
    const accessData = fetchAccessData(); 

    // Assuming accessData is in JSON format
    setFormData(prevData => ({
      ...prevData,
      name: accessData.name,
      menus: accessData.Menus.map(menu => ({
        name: menu.name,
        checked: menu.permission // Assuming there's a permission field
      }))
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (menuIndex) => {
    setFormData(prevData => ({
      ...prevData,
      menus: prevData.menus.map((menu, index) => 
        index === menuIndex ? { ...menu, checked: !menu.checked } : menu
      )
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          readOnly // Assuming you don't want to allow direct edits
        />
      </div>
      <div>
        {formData.menus.map((menu, index) => (
          <div key={index}>
            <label>
              <input 
                type="checkbox"
                checked={menu.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              {menu.name}
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;



function RadioButtonGroupWithNavigation() {
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = useState('option1');

  const handleRadioChange = (value) => {
    setRadioValue(value);
    navigate(`/page/${value}`); // Replace with your desired navigation path
  };

  return (
    <ButtonGroup>
      <ToggleButton
        type="radio"
        variant="outline-primary"
        name="radioGroup"
        value="option1"
        checked={radioValue === 'option1'}
        onChange={() => handleRadioChange('option1')}
      >
        Option 1
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-primary"
        name="radioGroup"
        value="option2"
        checked={radioValue === 'option2'}
        onChange={() => handleRadioChange('option2')}
      >
        Option 2
      </ToggleButton>
    </ButtonGroup>
  );
}



import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    // Replace 'API_URL' with the actual URL of your API
    axios.get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const processedData = data.reduce((result, item) => {
      const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

      if (existingGroup) {
        const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
        if (!existingType && item.JobType !== null && item.JobTitle !== null) {
          existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
        }
      } else {
        const groupItem = {
          JobGroupName: item.JobGroupName,
          __children: [],
        };

        if (item.JobType !== null && item.JobTitle !== null) {
          groupItem.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
        }

        result.push(groupItem);
      }

      return result;
    }, []);

    // Add null values for JobType and JobTitle in the first group
    if (processedData.length > 0) {
      processedData[0].JobType = null;
      processedData[0].JobTitle = null;
    }

    setOutput(processedData);
  }, [data]);

  return (
    <div>
      {/* Render your component content here */}
      {/* You can use the 'output' state variable which holds the desired output */}
      {JSON.stringify(output)}
    </div>
  );
};

export default MyComponent;







/////////////


array of objects

const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item, index) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
    if (!existingType && item.JobType !== null && item.JobTitle !== null) {
      existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }
  } else {
    const groupItem = {
      JobGroupName: item.JobGroupName,
      __children: [],
    };

    if (index === 0) {
      groupItem.JobType = null;
      groupItem.JobTitle = null;
    }

    if (item.JobType !== null && item.JobTitle !== null) {
      groupItem.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }

    result.push(groupItem);
  }

  return result;
}, []);

const outputArray = Object.values(output);
console.log(outputArray);





const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item, index) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
    if (!existingType && item.JobType !== null && item.JobTitle !== null) {
      existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }
  } else {
    const groupItem = {
      JobGroupName: item.JobGroupName,
      __children: [],
    };

    if (index === 0) {
      groupItem.JobType = null;
      groupItem.JobTitle = null;
    }

    if (item.JobType !== null && item.JobTitle !== null) {
      groupItem.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }

    result.push(groupItem);
  }

  return result;
}, []);

console.log(output);








const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item, index) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    if (item.JobType !== null && item.JobTitle !== null) {
      const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
      if (!existingType) {
        existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
      }
    }
  } else {
    const groupItem = {
      JobGroupName: item.JobGroupName,
      __children: [],
    };

    if (index === 0) {
      groupItem.JobType = null;
      groupItem.JobTitle = null;
    } else {
      groupItem.JobType = item.JobType;
      groupItem.JobTitle = item.JobTitle;
    }

    if (item.JobType !== null && item.JobTitle !== null) {
      groupItem.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }

    result.push(groupItem);
  }

  return result;
}, []);

console.log(output);

const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
    if (!existingType && item.JobType !== null && item.JobTitle !== null) {
      existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }
  } else {
    if (item.JobType !== null && item.JobTitle !== null) {
      result.push({
        JobGroupName: item.JobGroupName,
        JobType: null,
        JobTitle: null,
        __children: [{ JobType: item.JobType, JobTitle: item.JobTitle }],
      });
    }
  }

  return result;
}, []);

console.log(output);


import logo from './logo.svg';
import './App.css';

function App() {
   const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    if (item.JobType !== null && item.JobTitle !== null) {
      const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
      if (!existingType) {
        existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
      }
    }
  } else {
    if (item.JobType !== null && item.JobTitle !== null) {
      result.push({
        JobGroupName: item.JobGroupName,
        __children: [{ JobType: item.JobType, JobTitle: item.JobTitle }],
      });
    }
  }

  return result;
}, []);

console.log(output);
  const data = [
  { JobGroupName: "a", JobType: 1, JobTitle: 3 },
  { JobGroupName: "a", JobType: 1, JobTitle: 4 },
  { JobGroupName: "a", JobType: 2, JobTitle: 5 },
  { JobGroupName: "b", JobType: 3, JobTitle: 6 },
  { JobGroupName: "a", JobType: 4, JobTitle: 1 },
  { JobGroupName: "b", JobType: 5, JobTitle: 5 },
];

const output = data.reduce((result, item) => {
  const existingGroup = result.find((group) => group.JobGroupName === item.JobGroupName);

  if (existingGroup) {
    const existingType = existingGroup.__children.find((child) => child.JobType === item.JobType);
    if (!existingType) {
      existingGroup.__children.push({ JobType: item.JobType, JobTitle: item.JobTitle });
    }
  } else {
    result.push({
      JobGroupName: item.JobGroupName,
      __children: [{ JobType: item.JobType, JobTitle: item.JobTitle }],
    });
  }

  return result;
}, []);

console.log(output);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
