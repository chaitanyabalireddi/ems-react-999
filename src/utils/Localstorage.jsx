const employees = 
 [
      {
        "id": 1,
        "name": "Vasu",
        "email": "vasu@example.com",
        "password": "vasu123",
        "tasks": [
          {
            "task_title": "Prepare Sales Report",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-10",
            "task_category": "Reporting",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Update CRM Data",
            "active_task": false,
            "new_task": false,
            "task_date": "2024-12-08",
            "task_category": "Data Entry",
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Schedule Meeting with Clients",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-12",
            "task_category": "Communication",
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Rajesh",
        "email": "rajesh@example.com",
        "password": "rajesh123",
        "tasks": [
          {
            "task_title": "Design Website Layout",
            "active_task": true,
            "new_task": false,
            "task_date": "2024-12-07",
            "task_category": "Design",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Team Standup Meeting",
            "active_task": false,
            "new_task": false,
            "task_date": "2024-12-09",
            "task_category": "Meeting",
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Fix UI Bugs",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-11",
            "task_category": "Development",
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "name": "Kishore",
        "email": "kishore@example.com",
        "password": "kishore123",
        "tasks": [
          {
            "task_title": "Code Review",
            "active_task": true,
            "new_task": false,
            "task_date": "2024-12-06",
            "task_category": "Development",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Write Unit Tests",
            "active_task": false,
            "new_task": true,
            "task_date": "2024-12-10",
            "task_category": "Testing",
            "completed": false,
            "failed": true
          },
          {
            "task_title": "Deploy Application",
            "active_task": true,
            "new_task": false,
            "task_date": "2024-12-12",
            "task_category": "Operations",
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "name": "Ravi",
        "email": "ravi@example.com",
        "password": "ravi123",
        "tasks": [
          {
            "task_title": "Prepare Budget Report",
            "active_task": false,
            "new_task": false,
            "task_date": "2024-12-05",
            "task_category": "Finance",
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Update Financial Records",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-10",
            "task_category": "Finance",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Organize Team Building Event",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-13",
            "task_category": "HR",
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "name": "Ram",
        "email": "ram@example.com",
        "password": "ram123",
        "tasks": [
          {
            "task_title": "Research Market Trends",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-11",
            "task_category": "Research",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Create Marketing Campaign",
            "active_task": true,
            "new_task": false,
            "task_date": "2024-12-10",
            "task_category": "Marketing",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Prepare Presentation",
            "active_task": false,
            "new_task": true,
            "task_date": "2024-12-09",
            "task_category": "Presentation",
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 6,
        "name": "Surya",
        "email": "surya@example.com",
        "password": "surya123",
        "tasks": [
          {
            "task_title": "Conduct Training Session",
            "active_task": true,
            "new_task": false,
            "task_date": "2024-12-08",
            "task_category": "Training",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Develop Backend API",
            "active_task": true,
            "new_task": true,
            "task_date": "2024-12-10",
            "task_category": "Development",
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Test New Features",
            "active_task": false,
            "new_task": false,
            "task_date": "2024-12-07",
            "task_category": "Testing",
            "completed": true,
            "failed": false
          }
        ]
      }
    ]

    const admin =[ 
         {
      "id": 1,
      "name": "Admin",
      "email": "admin@example.com",
      "password": "admin123",
      "tasks": []
    },
    ]

    export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))

    }
    export const getlocalStorage1 = ()=>{
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))
      return{employees,admin}
    }


        
    
  
  