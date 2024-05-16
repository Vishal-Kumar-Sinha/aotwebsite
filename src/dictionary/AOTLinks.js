export const links = [
    {
      name: "Academics",
      submenu: true,
      sublinks: [
        {
          Head: "Department",
          sub: true,
          sublink: [
            { name: "Department of Computer Science & Engineering", link: "/department/cse", target: "" },
            {
              name: "Department of Computer Science & Business Systems",
              link: "/department/csbs",
              target: ""
            },
            {
              name: "Department of Electronics & Communication Engineering",
              link: "/department/ece",
              target: ""
            },
            {
              name: "Department of Electrical & Electronics Engineering",
              link: "/department/eee", target: ""
            },
            { name: "Department of Electrical Engineering", link: "/department/ee", target: "" },
            {
              name: "Department of Electronics & Instrumentation Engineering",
              link: "/department/eie", target: ""
            },
            { name: "Department of Information Technology", link: "/department/it", target: "" },
            { name: "Department of Mechanical Engineering", link: "/department/me", target: "" },
            { name: "Department of Engineering Science & Humanities", link: "/department/esh", target: "" },
            { name: "Department of Computer Application", link: "/department/ca", target: "" },
            { name: "Department of Business Administration", link: "/department/ba", target: "" },
          ],
        },
        {
          Head: "UG Programs",
          sub: false,
          link: "/ugprograms",
          target: "",
        },
        {
          Head: "PG Programs",
          sub: false,
          link: "/pgprograms",
          target: "",
        },
        {
          Head: "Resources",
          sub: true,
          sublink: [
            { name: "Library", link: "/library", target: "" },
            { name: "Moodle", link: "http://182.74.215.198/moodle/", target: "_blank" },
          ],
        },
        {
          Head: "Admissions",
          sub: true,
          sublink: [
            { name: "UG Admission", link: "/admissionug", target: "" },
            { name: "PG Admission", link: "/admissionpg", target: "" },
          ],
        },
        {
          Head: "Placements",
          sub: false,
          link: "/placements",
          target: "",
        },
      ],
    },
    {
      name: "Research",
      submenu: false,
      sublinks: [
        { name: "Research Overview", link: "/research" },
        { name: "Current Research", link: "/research#current-research" },
        { name: "Past Research", link: "/research#past-research" },
        { name: "Research Facilities", link: "/research#research-facilities" },
        { name: "Research Newsletters", link: "/research#newsletters" },
      ],
    },
    {
      name: "Student",
      submenu: false,
      sublinks: [
        { name: "Life@AOT", link: "/student" },
        { name: "Campus Facilities", link: "/campus" },
        { name: "Career Services", link: "/talent" },
        { name: "Events", link: "/events" },
      ],
    },
    {
      name: "Faculty",
      submenu: false,
      sublinks: [
        { name: "Faculty List", link: "/faculty" },
        { name: "Career@AOT", link: "/career" },
      ],
    },
  ];
  