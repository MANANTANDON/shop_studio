import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { HomeLayout } from "@/components/Layout/HomeLayout";

const PrivacyPolicy = () => {
  return (
    <HomeLayout>
      <Container maxWidth="md">
        <Box sx={{ py: 4, px: 2 }}>
          {/* Header */}
          <Typography
            variant="h3"
            component="h1"
            className="inter"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            variant="body2"
            className="inter"
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 4,
              fontStyle: "italic",
            }}
          >
            Last Updated: August 31, 2025
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Section 1 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              1. Introduction
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Welcome to Shop Snowchild Studio ("we," "our," or "us"). This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              [shop.snowchildstudio.com] and use our services.
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              By accessing or using our website, you agree to the terms of this
              Privacy Policy. If you do not agree with the terms of this Privacy
              Policy, please do not access the site.
            </Typography>
          </Box>

          {/* Section 2 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              2. Information We Collect
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{
                lineHeight: 1.7,
                color: "#444",
                mb: 2,
                fontWeight: "bold",
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 1,
              }}
            >
              We do not collect or store any personal information on our
              servers.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              2.1 Information We Do NOT Collect
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not collect names, email addresses, or contact information
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not require account registration or user profiles
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not store any personal data on our servers
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                We do not use cookies or tracking technologies
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              2.2 Third-Party Information Collection
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
            >
              When you click on our affiliate links and visit Amazon:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                <strong>Amazon</strong> may collect information according to
                their privacy policy
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not have access to or control over Amazon's data
                collection
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Any purchase data is handled entirely by Amazon
              </Typography>
            </Box>
          </Box>

          {/* Section 3 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              3. How We Use Your Information
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{
                lineHeight: 1.7,
                color: "#444",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Since we do not collect or store any personal information, we do
              not use your data for any purposes.
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Our website operates as a simple showcase of curated products with
              affiliate links to Amazon. We:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Display product information and affiliate links
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Redirect you to Amazon for purchases
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Do not track your browsing behavior
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Do not store any user data or preferences
              </Typography>
            </Box>
          </Box>

          {/* Section 4 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              4. Information Sharing and Disclosure
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{
                lineHeight: 1.7,
                color: "#444",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              We do not share any information because we do not collect any
              personal information.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              4.1 Third-Party Interactions:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                <strong>Amazon:</strong> When you click our affiliate links, you
                interact directly with Amazon
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Amazon's privacy policy governs any data they collect from you
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                We receive affiliate commissions but no personal customer data
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              4.2 We Do Not Sell Your Personal Information
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We do not collect, store, or sell any personal information.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              4.3 Legal Requirements
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              Since we do not collect personal information, there is no user
              data to disclose for legal purposes.
            </Typography>
          </Box>

          {/* Section 5 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              5. Amazon Affiliate Program
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Shop Snowchild Studio is a participant in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed to
              provide a means for sites to earn advertising fees by advertising
              and linking to Amazon.com.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              What this means:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We earn commissions from qualifying purchases made through our
                links
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Amazon may track your purchases and browsing behavior
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                You are subject to Amazon's Privacy Policy when making purchases
              </Typography>
            </Box>
          </Box>

          {/* Section 6 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              6. Cookies and Tracking Technologies
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{
                lineHeight: 1.7,
                color: "#444",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              We do not use cookies or any tracking technologies on our website.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              6.1 No Cookies Policy:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not set any cookies on your device
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not use analytics tracking (no Google Analytics)
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not use advertising pixels or tracking scripts
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                We do not track user behavior or preferences
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              6.2 Third-Party Cookies
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              When you click affiliate links and visit Amazon, Amazon may set
              their own cookies according to their privacy policy. We have no
              control over Amazon's cookie practices.
            </Typography>
          </Box>

          {/* Section 7 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              7. Data Security
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We implement appropriate security measures to protect your
              personal information:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                SSL encryption for data transmission
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Secure hosting infrastructure
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Regular security updates and monitoring
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Limited access to personal information
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </Typography>
          </Box>

          {/* Section 8 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              8. Data Retention
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{
                lineHeight: 1.7,
                color: "#444",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              We do not retain any user data.
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Since we do not collect or store any personal information,
              cookies, or tracking data:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                There is no user data to retain or delete
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not maintain user profiles or browsing histories
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                All interactions are directly between you and Amazon when you
                click affiliate links
              </Typography>
            </Box>
          </Box>

          {/* Contact Section */}
          <Box sx={{ mt: 6, p: 3, bgcolor: "#f9f9f9", borderRadius: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              Contact Information
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", fontWeight: "bold" }}
            >
              Shop Snowchild Studio
            </Typography>
            <Box component="ul" sx={{ pl: 3, listStyle: "none" }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Email: privacy@snowchildstudio.com
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Website: shop.snowchildstudio.com/contact
              </Typography>
            </Box>
          </Box>

          {/* Footer */}
          <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #e0e0e0" }}>
            <Typography
              variant="body2"
              className="inter"
              sx={{
                textAlign: "center",
                color: "#666",
                fontStyle: "italic",
              }}
            >
              By using our website, you acknowledge that you have read and
              understood this Privacy Policy and agree to its terms.
            </Typography>
          </Box>
        </Box>
      </Container>
    </HomeLayout>
  );
};

export default PrivacyPolicy;
