import React from "react";
import { Box, Typography, Container, Divider, Alert } from "@mui/material";
import { HomeLayout } from "@/components/Layout/HomeLayout";

const TermsAndConditions = () => {
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
            Terms and Conditions
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
              1. Acceptance of Terms
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Welcome to Shop Snowchild Studio. These Terms and Conditions
              ("Terms") govern your use of our website located at
              shop.snowchildstudio.com (the "Service") operated by Shop
              Snowchild Studio ("us", "we", or "our").
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              By accessing or using our Service, you agree to be bound by these
              Terms. If you disagree with any part of these terms, then you may
              not access the Service.
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
              2. Description of Service
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Shop Snowchild Studio is a curated product showcase website that
              displays handpicked products from Amazon. Our service includes:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Curated product recommendations including vinyl records, CDs,
                and other items
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Affiliate links to Amazon for product purchases
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Product information and descriptions
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                A browsing experience for discovering products
              </Typography>
            </Box>
            <Alert severity="warning" sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                className="inter"
                sx={{ fontWeight: "bold" }}
              >
                Important: We are a showcase website only. All purchases are
                made directly through Amazon, and we do not handle any
                transactions, shipping, or customer service for products.
              </Typography>
            </Alert>
          </Box>

          {/* Section 3 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              3. Amazon Affiliate Disclosure
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Shop Snowchild Studio is a participant in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed to
              provide a means for us to earn fees by linking to Amazon.com and
              affiliated sites.
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              3.1 How Affiliate Links Work
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We earn a commission when you purchase products through our
                affiliate links
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                This does not affect the price you pay for products
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We only recommend products we genuinely believe in
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                All affiliate links are clearly identified
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
              4. User Responsibilities
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              By using our website, you agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Use the website for lawful purposes only
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Not attempt to damage, disable, or impair the website
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Not use the website to transmit harmful or malicious content
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Respect intellectual property rights
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Comply with all applicable laws and regulations
              </Typography>
            </Box>
          </Box>

          {/* Section 5 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              5. Intellectual Property Rights
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              The content, design, and structure of our website are protected by
              intellectual property laws. This includes:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Website design and layout
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Logo and branding materials
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Product descriptions and curated content
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Software and code
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </Typography>
          </Box>

          {/* Section 6 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              6. Third-Party Services
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Our website contains links to third-party services, primarily
              Amazon. Please note:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We are not responsible for third-party content or services
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Third-party terms and conditions apply when you use their
                services
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not endorse or guarantee third-party products or services
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Your interactions with third parties are solely between you and
                them
              </Typography>
            </Box>
          </Box>

          {/* Section 7 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              7. Disclaimers and Limitations of Liability
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              7.1 Website Disclaimer
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              Our website is provided "as is" without any warranties, express or
              implied. We do not guarantee:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Uninterrupted or error-free operation
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Accuracy of product information
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Availability of products or prices
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Security from viruses or malicious code
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              className="inter"
              sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#333" }}
            >
              7.2 Product Disclaimer
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We are not responsible for:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Product quality, defects, or performance issues
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Shipping delays or issues
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Customer service for purchased products
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Returns, refunds, or exchanges
              </Typography>
            </Box>

            <Alert severity="info" sx={{ mt: 2 }}>
              <Typography variant="body2" className="inter">
                All product-related issues should be directed to Amazon's
                customer service.
              </Typography>
            </Alert>
          </Box>

          {/* Section 8 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              8. Privacy and Data Collection
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We prioritize your privacy. Please note:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not collect or store personal information
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                We do not use cookies or tracking technologies
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Third-party services may collect data according to their
                policies
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Please review our Privacy Policy for complete details
              </Typography>
            </Box>
          </Box>

          {/* Section 9 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              9. Modifications to Terms
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting on this page. We will:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Update the "Last Updated" date at the top of this page
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Notify users of significant changes when possible
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Continue to provide the service under the new terms
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              Your continued use of the website after changes constitutes
              acceptance of the new Terms.
            </Typography>
          </Box>

          {/* Section 10 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              10. Termination
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              We reserve the right to terminate or suspend access to our website
              immediately, without prior notice, for any reason, including:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Violation of these Terms
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Misuse of the website
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444", mb: 1 }}
              >
                Legal or security concerns
              </Typography>
              <Typography
                component="li"
                variant="body1"
                className="inter"
                sx={{ lineHeight: 1.7, color: "#444" }}
              >
                Business reasons
              </Typography>
            </Box>
          </Box>

          {/* Section 11 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              11. Governing Law
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444", mb: 2 }}
            >
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              Any disputes arising from these Terms or your use of the website
              shall be resolved in the courts of [Your Jurisdiction].
            </Typography>
          </Box>

          {/* Section 12 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              className="inter"
              sx={{ fontWeight: "bold", mb: 2, color: "#2c2c2c" }}
            >
              12. Severability
            </Typography>
            <Typography
              variant="body1"
              className="inter"
              sx={{ lineHeight: 1.7, color: "#444" }}
            >
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary so that these Terms will otherwise remain
              in full force and effect.
            </Typography>
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
              If you have any questions about these Terms and Conditions, please
              contact us:
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
                Email: legal@snowchildstudio.com
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
              By using our website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </HomeLayout>
  );
};

export default TermsAndConditions;
