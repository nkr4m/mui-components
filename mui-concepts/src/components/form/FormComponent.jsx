import React, { useState } from 'react'
import {
    Box,
    Grid,
    TextField,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    Switch,
    Slider,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Button,
} from '@mui/material';

export default function FormComponent() {
    // State for form fields
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        subscribe: false,
        decision: '',
        notifications: false,
        sliderValue: 50,
    });

    // Handle change for text fields and select
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle change for checkboxes and switches
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    // Handle slider change
    const handleSliderChange = (event, newValue) => {
        setFormData((prev) => ({ ...prev, sliderValue: newValue }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        console.log('Form Data:', formData); // Log form data to the console
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                maxWidth: 600,
                mx: 'auto',
            }}
        >
            <Grid container spacing={2}>
                {/* Full-Width Text Field */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                {/* Email and Phone Side-by-Side */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Grid>

                {/* Select Field */}
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            label="Gender"
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Checkboxes */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Subscribe to Newsletter"
                    />
                </Grid>

                {/* Radio Buttons */}
                <Grid item xs={12}>
                    <RadioGroup
                        row
                        name="decision"
                        value={formData.decision}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </Grid>

                {/* Switch */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                name="notifications"
                                checked={formData.notifications}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Enable Notifications"
                    />
                </Grid>

                {/* Slider */}
                <Grid item xs={12}>
                    <Box sx={{ px: 2 }}>
                        <Slider
                            value={formData.sliderValue}
                            onChange={handleSliderChange}
                            step={10}
                            marks
                            min={0}
                            max={100}
                        />
                    </Box>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};