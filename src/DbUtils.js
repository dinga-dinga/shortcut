var jsonText = `
{
	"Roles": [
		"Software Developer",
		"Project Engineer",
		"Team Leader",
		"Firmware Developer",
		"BSP Developer",
		"Section Officer"
	],
	"Employers": [
		"IDF",
		"Adviser",
		"Elbit",
		"Rafael",
		"Mabat",
		"Elta"
	],
	"Sections": {
		"1": {
			"Image": "sections/mador1.jpeg"
		},
		"2": {
			"Image": "sections/mador2.jpg"
		},
		"12": {
			"Image": "sections/mador12.png"
		},
		"14": {
			"Image": "sections/mador14.png"
		},
		"15": {
			"Image": "sections/mador15.png"
		},
		"34": {
			"Image": "sections/mador34firmware.png"
		}
	},
	"People": {
		"123456789": {
			"Name": "Tomer Krofman",
			"Employer": "IDF",
			"Image": "people/krofman.jpg",
			"PhoneNumber": "0501223445",
			"RleaseDate": "08/2030",
			"IdfID": "5975922"
		},
		"123456788": {
			"Name": "Idan Ahal",
			"Employer": "IDF",
			"Image": "people/idan.jpg",
			"PhoneNumber": "0501223765",
			"RleaseDate": "11/2021",
			"IdfID": "7473724"
		},
		"000000123": {
			"Name": "Haim Meelta",
			"Employer": "Elta",
			"PhoneNumber": "0501223430"
		},
		"987654321": {
			"Name": "Rasan Jesus",
			"Employer": "IDF",
			"Image": "people/jesus.jpg",
			"PhoneNumber": "0546474643",
			"RleaseDate": "08/2020",
			"IdfID": "7937513"
		},
		"654371821": {
			"Name": "Mark Zuckerberg",
			"Employer": "Elbit",
			"Image": "people/zuckerberg.jpg",
			"PhoneNumber": "0528691858"
		},
		"548569435": {
			"Name": "Yotam Amir",
			"Employer": "IDF",
			"Image": "people/yotam.jpg",
			"PhoneNumber": "0501223445",
			"RleaseDate": "05/2021",
			"IdfID": "9759142"
		},
		"937592794": {
			"Name": "Omer Chen",
			"Employer": "IDF",
			"Image": "people/omer.jpg",
			"PhoneNumber": "0501223445",
			"RleaseDate": "11/2021",
			"IdfID": "5927583"
		},
		"285930583": {
			"Name": "Amit Levi",
			"Employer": "IDF",
			"Image": "people/amit.jpg",
			"PhoneNumber": "0501223445",
			"RleaseDate": "11/2022",
			"IdfID": "5829304"
		},
		"482952930": {
			"Name": "Yarin Mayost",
			"Employer": "IDF",
			"Image": "people/yarin.jpg",
			"PhoneNumber": "0542859275",
			"RleaseDate": "11/2022",
			"IdfID": "123456789"
		},
		"638391728": {
			"Name": "Isaac Garzon",
			"Employer": "Adviser",
			"PhoneNumber": "0551234567"
		}
	},
	"Projects": [
		{
			"ProjectName": "Wimbledon",
			"Section": "12",
			"OtherNames": ["The Champions, Wimbledon"],
			"Description": "Top Secret",
			"Image": "projects/wimbledon_logo.png",
			"People": [
				{
					"ID": "123456789",
					"Role": "Project Engineer",
					"Start": "07/2018"
				},
				{
					"ID": "123456788",
					"Role": "Software Developer",
					"Features": ["Boot"],
					"Start": "10/2018",
					"End": "12/2018"
				},
				{
					"ID": "000000123",
					"Role": "BSP Developer",
					"Start": "04/2018"
				},
				{
					"ID": "987654321",
					"Role": "Section Officer",
					"Start": "07/2018"
				}
			]
		},
		{
			"ProjectName": "pid",
			"Section": "15",
			"OtherNames": ["BB", "Zehut", "Shortcut"],
			"Description": "Project ID",
			"Image": "projects/pid_logo.jpeg",
			"People": [
				{
					"ID": "123456789",
					"Role": "Section Officer",
					"Start": "03/2019"
				},
				{
					"ID": "937592794",
					"Role": "Team Leader",
					"Start": "03/2019",
					"End": "03/2019"
				},
				{
					"ID": "123456788",
					"Role": "Team Leader",
					"Start": "04/2019"
				},
				{
					"ID": "548569435",
					"Role": "Software Developer",
					"Features": ["JSON"],
					"Start": "03/2019"
				},
				{
					"ID": "285930583",
					"Role": "Software Developer",
					"Start": "03/2019"
				},
				{
					"ID": "482952930",
					"Role": "Software Developer",
					"Features": ["React"],
					"Start": "03/2019"
				},
				{
					"ID": "654371821",
					"Role": "Project Engineer",
					"Start": "03/2019"
				},
				{
					"ID": "638391728",
					"Role": "Firmware Developer",
					"Features": ["Boot", "Server"],
					"Start": "04/2019"
				}
			]
		}
	]
}

`;

var data = JSON.parse(jsonText);

function getProjectsBySection(sectionNumber) {
	var sectionProjects = [];

	for (var projectIndex in data.Projects) {
		if (data.Projects[projectIndex].Section == sectionNumber) {
			var projectInfo = data.Projects[projectIndex];
			sectionProjects = sectionProjects.concat([projectInfo]);
		}
	}

	return sectionProjects;
}

function getProjectsByID(id) {
	var projects = [];

	var partOfProject = function(projectData, id) {
		for (personIndex in projectData.People) {
			if (projectData.People[personIndex].ID == id) {
				return true;
			}
		}

		return false;
	};

	for (var projectIndex in data.Projects) {
		if (partOfProject(data.Projects[projectIndex], id)) {
			var projectInfo = data.Projects[projectIndex];
			projects = projects.concat([projectInfo]);
		}
	}

	return projects;
}

function getPeople(projectName) {
	var people = [];

	for (var projectIndex in data.Projects) {
		if (data.Projects[projectIndex].ProjectName == projectName) {
			var output = [];
			var people = data.Projects[projectIndex].People;

			for (var personIndex in people) {
				var id = people[personIndex].ID;
				var personData = Object.assign({}, people[personIndex], data.People[id]);
				output = output.concat([personData]);
			}

			return output;
		}
	}

	return null; 
}



function main() {
	var sectionProjects = getProjectsBySection("12");
	var people = getPeople("pid");

	var krofmanProjects = getProjectsByID("123456789");

	var outputText = "Number of projects:" + krofmanProjects.length;
	for (projectIndex in krofmanProjects)
	{
		outputText += '\n' + krofmanProjects[projectIndex].ProjectName;
	}

	document.getElementById("demo").innerHTML = outputText;
}

main();