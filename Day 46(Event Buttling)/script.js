{
    let developers = [
        {
            name: "Alice Johnson",
            skill: ["JavaScript", "React", "Node.js", "HTML", "CSS", "MongoDB", "Express", "TypeScript", "GraphQL", "REST APIs"],
            description: "A full-stack developer passionate about building responsive web applications.",
            jobTitle: "Frontend Developer",
            price: 50, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Bob Smith",
            skill: ["Python", "Django", "PostgreSQL", "Flask", "SQL", "HTML", "CSS", "JavaScript", "REST APIs", "GraphQL"],
            description: "Backend developer with experience in building robust server-side applications.",
            jobTitle: "Backend Developer",
            price: 60, // Price per hour in USD
            availability: "Busy", // Availability status
            type: "Company", // Organization or Freelancer
            company: "Data Systems Ltd.", // Random company name
            profileImage: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Charlie Brown",
            skill: ["Java", "Spring Boot", "Microservices", "Hibernate", "SQL", "Docker", "Kubernetes", "AWS", "REST APIs", "Maven"],
            description: "Senior developer with expertise in scalable and secure systems.",
            jobTitle: "Senior Java Developer",
            price: 80, // Price per hour in USD
            availability: "Available in 2 weeks", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Diana Green",
            skill: ["Ruby", "Rails", "MySQL", "PostgreSQL", "CSS", "JavaScript", "HTML", "Git", "RSpec", "Docker"],
            description: "Full-stack developer who loves creating beautiful and functional web applications.",
            jobTitle: "Full-Stack Developer",
            price: 55, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Ethan White",
            skill: ["PHP", "Laravel", "JavaScript", "Vue.js", "SQL", "HTML", "CSS", "Git", "AWS", "REST APIs"],
            description: "Developer with a focus on building web applications with modern frameworks.",
            jobTitle: "PHP Developer",
            price: 45, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Company", // Organization or Freelancer
            company: "CodeCraft Studios", // Random company name
            profileImage: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Fiona Black",
            skill: ["Swift", "iOS", "Xcode", "Objective-C", "UI/UX Design", "Firebase", "SwiftUI", "REST APIs", "Git", "Core Data"],
            description: "Mobile app developer with a focus on iOS apps and user-friendly design.",
            jobTitle: "iOS Developer",
            price: 70, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://plus.unsplash.com/premium_photo-1707928078633-0593545cf471?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "George Grey",
            skill: ["C#", ".NET", "Azure", "SQL", "JavaScript", "REST APIs", "Docker", "Kubernetes", "Git", "AWS"],
            description: "Experienced backend developer specializing in enterprise applications and cloud services.",
            jobTitle: "C# Developer",
            price: 75, // Price per hour in USD
            availability: "Busy", // Availability status
            type: "Company", // Organization or Freelancer
            company: "DevCloud Inc.", // Random company name
            profileImage: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Hannah Blue",
            skill: ["JavaScript", "Vue.js", "Firebase", "Node.js", "HTML", "CSS", "Git", "MongoDB", "TypeScript", "REST APIs"],
            description: "Frontend developer with a passion for building real-time web applications.",
            jobTitle: "Frontend Developer",
            price: 50, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Isaac Gold",
            skill: ["C++", "Unity", "Game Development", "Unreal Engine", "C#", "Git", "Docker", "AWS", "AI Programming", "Shaders"],
            description: "Game developer with expertise in creating immersive game environments and gameplay mechanics.",
            jobTitle: "Game Developer",
            price: 85, // Price per hour in USD
            availability: "Available", // Availability status
            type: "Freelancer", // Organization or Freelancer
            company: "Freelancer", // For freelancers, just display "Freelancer"
            profileImage: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        },
        {
            name: "Julia Red",
            skill: ["Go", "Docker", "Kubernetes", "DevOps", "AWS", "CI/CD", "Linux", "Terraform", "Git", "Python"],
            description: "DevOps engineer with a focus on containerization and cloud-native applications.",
            jobTitle: "DevOps Engineer",
            price: 65, // Price per hour in USD
            availability: "Available in 1 week", // Availability status
            type: "Company", // Organization or Freelancer
            company: "CloudTech Innovations", // Random company name
            profileImage: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for image
        }
    ];

    let profile_collection = document.querySelector(".profile_collection")
    let h1 = document.querySelector("h1")
    let clutter = ""

    let skill_temp = []

    h1.innerHTML = `Profiles(${developers.length})`
    let idx = 0
    for (let x of developers) {

        if (x.skill.length > 2) {
            let len = x.skill.length - 2

            skill_temp = x.skill.slice(0, 2)

            if (len >= 1) {
                skill_temp.push(len + "+")
            }
        }

        let skill = ""
        for (let i of skill_temp) {
            skill += `<span>${i}</span>`
        }

        clutter += `
        <div class="Profile">
        <div class="profile_top">
                <span class="avalibility">${x.availability}</span>
                <span class="Price">$${x.price}/hr</span>
            </div>
        <div class="profile_pt-1">
            <img src="${x.profileImage}" alt="">
    
            <h2 class="name">${x.name}</h2>
            <h4 class="Job_title">${x.jobTitle}</h4>
            <h4 class="Job_type">${x.type}</h4>
            <div class="skill">
                ${skill}
            </div>
            <p class="Description">${x.description}</p>
        </div>
        <div class="line"></div>
            <button id="${idx}" class="Profile_Btn">View Prfile</button>
        </div>`

        idx++
    }

    profile_collection.innerHTML = clutter

    
}
