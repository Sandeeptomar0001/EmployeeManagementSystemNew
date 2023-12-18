import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { TextField, Button, Grid, Container, Typography, MenuItem } from '@mui/material';
import usePageRefresh from './usePageRefresh'

const AddEmployees = ({ onSubmit, courses }) => {
  usePageRefresh()
  
  const[disable,setDisable]=useState(true)
  // const [courseId, setCourseId] = useState('')
  // const [courseName, setCourseName] = useState('')
  // const [courseDuration, setCourseDuration] = useState('')
  // const [courseFee, setCourseFee] = useState('')

  const [formData, setFormData] = useState({
    enrollmentNo: '',
    EmployeeName: '',
    emailID: '',
    mobileNumber: '',
    city: '',
    qualifications: '',
    courseName: '',
    courseDuration: '',
    // totalFees: '',
    courseFee:'',
    discount: '',
    actualFee: '',
    counsellorName: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['enrollmentNo', 'EmployeeName', 'emailID', 'mobileNumber', 'city', 'qualifications', 'discount', 'actualFee', 'counsellorName'];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert('Please fill in all required fields');
      return;
    }

    // Use SweetAlert instead of the regular alert
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to add this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, call the onSubmit function
        onSubmit(formData);
        Swal.fire('Added!', 'Employee has been added successfully.', 'success');
        // Reset the form data
        setFormData({
          EmployeeName: '',
          enrollmentNo: '',
          emailID: '',
          mobileNumber: '',
          city: '',
          qualifications: '',
          courseName: '',
          courseDuration: '',
          courseFee: '',
          discount: '',
          actualFee: '',
          counsellorName: '',
        });
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'courseName') {
      const selectedCourse = courses.find((course) => course.courseName === value);

      setFormData({
        ...formData,
        [name]: selectedCourse ? selectedCourse.courseName : value,
        courseDuration: selectedCourse ? selectedCourse.courseDuration : '',
        courseFee: selectedCourse ? selectedCourse.courseFee : '',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Employee Name"
              variant="outlined"
              fullWidth
              name="EmployeeName"
              value={formData.EmployeeName}
              onChange={handleInputChange}
              // inputProps={{
              //   pattern: '^(?=.[a-z])(?=.[A-Z]).+$',
              //   title: 'Enter uppercase and lowercase letters',
              // }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Enrollment No."
              variant="outlined"
              fullWidth
              name="enrollmentNo"
              value={formData.enrollmentNo}
              onChange={handleInputChange}
              // inputProps={{
              //   pattern: '^(?=.[0-9])(?=.[a-zA-Z]).+$', // Regular expression for alphanumeric
              //   title: 'Enter letters and numbers ex. (Mba12345)',
              // }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email ID"
              variant="outlined"
              fullWidth
              name="emailID"
              value={formData.emailID}
              onChange={handleInputChange}
              inputProps={{
                pattern: '^\\S+@\\S+\\.\\S+$', // Regular expression for email validation
                title: 'Enter a valid email address',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              inputProps={{
                pattern: '^[0-9]{10}$', // Regular expression for alphanumeric
                title: 'Enter Number min-maax 10 digit',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Qualifications"
              variant="outlined"
              fullWidth
              name="qualifications"
              value={formData.qualifications}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Course Name"
              variant="outlined"
              fullWidth
              name="courseName"
              // value={courseName}
              value={formData.courseName}
              onChange={handleInputChange}
            >{courses.map((course) => (
              <MenuItem  key={course.courseId} value={course.courseId}>
                {course.courseName}
              </MenuItem>
            ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Course Duration"
              variant="outlined"
              fullWidth
              name="courseDuration"
              value={formData.courseDuration}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Course Fee"
              variant="outlined"
              fullWidth
              name="courseFee"
              value={formData.courseFee}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Discount"
              variant="outlined"
              fullWidth
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Actual Fee"
              variant="outlined"
              fullWidth
              name="actualFee"
              value={formData.actualFee}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Counsellor Name"
              variant="outlined"
              fullWidth
              name="counsellorName"
              value={formData.counsellorName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add new Employee
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddEmployees;