export const questions = [
  {
    section: 1,
    items: [
      {
        label: "Data Source Type",
        type: "select",
        value: "datasource",
        options: ["RDBMS", "FILE"],
      },
      {},
      {
        label: "Data Source Connection",
        type: "select",
        value: "database",
        options: ["demo1", "demo2"],
      },
      {
        label: "Create Data Source Connection",
        type: "text",
        value: "cdsc",
      },
      {
        label: "Data Target Connection ",
        type: "select",
        value: "dtc",
        options: ["target1", "target2"],
      },
      {
        label: "Create Data Target Connection",
        type: "text",
        value: "cdtc",
      },
      {
        label: "Application",
        type: "select",
        value: "app",
        options: ["app1", "app2"],
      },
      {
        label: "Create Application",
        type: "text",
        value: "ca",
      },
    ],
  },
  {
    section: 2,
    items: [
      {
        label: "Source Type",
        type: "select",
        value: "database",
        options: ["Query", "Table"],
      },
      {
        label: "Query",
        type: "text",
        value: "query",
      },
      {},
      {
        label: "Database Name",
        type: "text",
        value: "databasename",
      },
      {
        label: "Schema Name",
        type: "text",
        value: "schemaname",
      },
      {
        label: "Table Name",
        type: "text",
        value: "tablename",
      },
      {
        label: "Bucket Name",
        type: "text",
        value: "bucketname",
      },
      {
        label: "Full File Name",
        type: "text",
        value: "fullfilename",
      },
    ],
  },
  {
    section: 3,
    items: [
      {
        label: "Name",
        type: "text",
        value: "name",
      },
      {
        label: "Description",
        type: "text",
        value: "description",
      },
      ,
      {
        label: "Class",
        type: "text",
        value: "class",
      },
      {
        label: "Project Name",
        type: "select",
        value: "pname",
        options: ["State 1", "State 2"],
      },
    ],
  },
];
