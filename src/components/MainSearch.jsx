import { useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const jobsFromRedux = useSelector((state) => state.companies.jobs);
  const areJobsLoading = useSelector((state) => state.companies.isLoading);
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobsAction(query));
    setIsSubmit(true);
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-end"
        >
          <h1 className="my-0">Remote Jobs Search</h1>
          <Link to="/favourites">
            <div>Favourite Companies</div>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {isSubmit && (
          <>
            {areJobsLoading ? (
              <Col xs={12} className="d-flex justify-content-center mt-3">
                <Spinner animation="grow" />
              </Col>
            ) : (
              <Col xs={10} className="mx-auto mb-5">
                {jobsFromRedux.map((jobData) => (
                  <Job key={jobData._id} data={jobData} />
                ))}
              </Col>
            )}{" "}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
