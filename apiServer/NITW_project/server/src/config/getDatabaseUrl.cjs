const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/NITW_project_development",
      test: "postgres://postgres:postgres@localhost:5432/NITW_project_test",
      e2e: "postgres://postgres:postgres@localhost:5432/NITW_project_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
