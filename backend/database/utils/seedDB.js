const { Employee, Task, Order, Event } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Smith",
		department: "Engineering"
	});

	const dummyEmployee1 = await Employee.create({
		first_name: "Kevin",
		last_name: "Spacey",
		department: "HR"
	});

	const dummyEmployee2 = await Employee.create({
		first_name: "Bryan",
		last_name: "Park",
		department: "Web Developer"
	});
	const dummyEmployee3 = await Employee.create({
        first_name: "Nathan",
        last_name: "Jones",
        department: "CEO"
    });

    const dummyEmployee4 = await Employee.create({
        first_name: "Stephen",
        last_name: "Howson",
        department: "Chief Ivesting Officer"
    });
    const dummyEmployee5 = await Employee.create({
        first_name: "Kristina",
        last_name: "Delia",
        department: "Head of Sales"
    });

    const dummyEmployee6 = await Employee.create({
        first_name: "Pablo",
        last_name: "Pena",
        department: "Chief Technology Officer"
    });

    const dummyEmployee7 = await Employee.create({
        first_name: "Thai",
        last_name: "Hyun",
        department: "Chairman"
	});


    const dummyTask = await Task.create({
        description: "Meeting with NASA",
        completion_status: "Completed",
        due_date: "2023/05/01",
        comments: "Customer wants to go over the blue print of facilties",
    });
	   const dummyTask1 = await Task.create({
        description: "Meeting with Nathan",
        completion_status: "Completed",
        due_date: "2023/05/05",
        comments: "Disputes with fellow coworkers",
    });
	const dummyTask2 = await Task.create({
        description: "Build an app for Starbucks",
        completion_status: "Not Completed",
        due_date: "2023/05/10",
        comments: "Customer needs it ASAP",
    }); 
    const dummyTask3 = await Task.create({
        description: "Create an investing portfolio for David",
        completion_status: "Not Completed",
        due_date: "2023/06/30",
        comments: "Customer wants aggressive trades",
    });
	const dummyTask4 = await Task.create({
        description: "Quarterly Meeting",
        completion_status: "Not Completed",
        due_date: "2023/07/03",
        comments: "Go over quarterly budgeting",
    });
    const dummyTask5 = await Task.create({
        description: "Meeting with Tesla",
        completion_status: "Not Completed",
        due_date: "2023/07/05",
        comments: "Updating customers about design progress",
    });
  
    const dummyTask6 = await Task.create({
        description: "Meeting with the C.I.A.",
        completion_status: "Not Completed",
        due_date: "2023/07/25",
        comments: "Software upgrades, Security upgrades",
    });
	const dummyTask8 = await Task.create({
        description: "Chairman's Signature",
        completion_status: "Not Completed",
        due_date: "2023/07/28",
        comments: "Project approval",
    });

   

	const dummyOrder = await Order.create({
		detail: "Building Blue print ",
		request: "- Low cost \r\n- Detailed scematics \r\n- Safe and secure \r\n",
		customer: "NASA",
		order_due_date: "2023/05/01"	
	})
	const dummyOrder1 = await Order.create({
		detail: " Create and app aligning with company ",
		request: "- Easy UI \r\n- 2 MFA Security \r\n- Great design",
		customer: "StarBucks",
		order_due_date: "2023/05/05"	
	})
	
	const dummyOrder2 = await Order.create({
		detail: "Customer wants to create an investing portfolio ",
		request: "- Aggressive investing plan \r\n- Goal 10% annual profit \r\n- Energy Market",
		customer: "David Villa",
		order_due_date: "2023/06/30"	
	})
	const dummyOrder3 = await Order.create({
		detail: "Car Design",
		request: "- Sleek design \r\n- clear car concept \r\n- 2 seater",
		customer: "Tesla",
		order_due_date: "2023/07/05"	
	})


	const dummyOrder4 = await Order.create({
		detail: "System upgrades",
		request: "- Software upgrade, \r\n -Security upgrades",
		customer: "C.I.A",
		order_due_date:"2023/7/25"
	})


	

	const dummyEvent = await Event.create({
		title: "task1",
		start_date: "2023/04/24",
		end_date: "2023/05/01",
	})
	const dummyEvent1 = await Event.create({
		title: "task2",
		start_date: "2021/05/05",
		end_date: "2023/05/11",
	})

	const dummyEvent2 = await Event.create({
		title: "task3",
		start_date: "2023/01/15",
		end_date: "2023/05/08",
	})

	const dummyEvent3 = await Event.create({
		title: "task4",
		start_date: "2023/06/16",
		end_date: "2023/06/30",
	})

	const dummyEvent4 = await Event.create({
		title: "task5",
		start_date: "2023/07/01",
		end_date: "2023/07/03",
	})

	const dummyEvent5 = await Event.create({
		title: "task6",
		start_date: "2023/07/01",
		end_date: "2023/07/05",
	})

	const dummyEvent6 = await Event.create({
		title: "task7",
		start_date: "2023/07/18",
		end_date: "2023/07/25",
	})


	const dummyEvent8 = await Event.create({
		title: "task9",
		start_date: "2023/07/27",
		end_date: "2023/07/28",
	})


	

	// set tasks to employees 
	
	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	await dummyTask2.setEmployee(dummyEmployee2);
	await dummyTask3.setEmployee(dummyEmployee3);
	await dummyTask4.setEmployee(dummyEmployee4);
	await dummyTask5.setEmployee(dummyEmployee5);
	await dummyTask6.setEmployee(dummyEmployee6);
	await dummyTask8.setEmployee(dummyEmployee7);
	

//set orders on order's page 
	await dummyTask.addOrder(dummyOrder);
	await dummyTask2.addOrder(dummyOrder1);
	await dummyTask3.addOrder(dummyOrder2);
	await dummyTask5.addOrder(dummyOrder3);
	await dummyTask6.addOrder(dummyOrder4);
	

//set calander with tasks. 
	await dummyEvent;
	await dummyEvent1;
	await dummyEvent2;
	await dummyEvent3;
	await dummyEvent4;
	await dummyEvent5;
	await dummyEvent6;
	await dummyEvent8;
}

module.exports = seedDB;