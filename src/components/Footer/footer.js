import { Divider, Typography, Container, Box } from "@mui/material";
import React, { useEffect } from "react";
import IconService from "../../utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { detailfooterSlice } from "../../Store/Reducer/detailfooterslice";

const Footer = () => {
  const dispatch = useDispatch();
  const { detailFooter, error } = useSelector(
    ({ detailfooterSlice }) => detailfooterSlice
  );

  useEffect(() => {
    dispatch(detailfooterSlice());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: '#E7F1F2', mt: 15, py: 8 }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={8}>
          <Box display="flex" justifyContent="center" alignItems="center" gap={12}>
            <Box pt={16}>
              <Typography variant="h6" fontWeight="bold">
                Tagline will go here. Lorem ipsum dolor sit amet…
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {detailFooter?.data?.contact_mail || 'user@email.com'}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: 100, mt: 2 }} />
            <Box display="flex" gap={16} pt={16}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" fontWeight="bold">Address</Typography>
                <Typography variant="body2">
                  {detailFooter?.data?.address || '101 Office No, Road name, India'}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body1" fontWeight="bold">Contacts</Typography>
                <Typography variant="body2">
                  {detailFooter?.data?.contact_mail || 'user@email.com'} <br />
                  {detailFooter?.data?.contact_no || '(276) 341-7690'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <img src={IconService.logo} alt="Company Logo" width={135} height={60} />
            <Box display="flex" gap={6}>
              <Typography variant="body2">About</Typography>
              <Typography variant="body2">Blogs</Typography>
              <Typography variant="body2">Contact</Typography>
              <Typography variant="body2">Services</Typography>
            </Box>
            <Typography variant="body2">© 2022. All rights reserved</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
