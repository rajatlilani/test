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
