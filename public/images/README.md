# Portfolio Image Assets Setup

## Required Images

To fully customize your portfolio, please add the following images to the `/public/images` directory:

### Profile Images
- `profile.jpg` - Main profile picture for the Hero section
- `about-profile.jpg` - Profile picture for the About section

### Project Images
- `project-ecommerce.jpg` - E-commerce platform project image
- `project-task.jpg` - Task management app project image
- `project-weather.jpg` - Weather dashboard project image
- `project-analytics.jpg` - Social media analytics project image
- `project-fitness.jpg` - Fitness tracker project image
- `project-recipe.jpg` - Recipe finder project image

### Certificate Images
- `cert-fullstack.jpg` - Full Stack Web Development certificate
- `cert-javascript.jpg` - JavaScript Algorithms and Data Structures certificate
- `cert-react.jpg` - React - The Complete Guide certificate
- `cert-aws.jpg` - AWS Certified Solutions Architect certificate
- `cert-ux.jpg` - UI/UX Design Principles certificate
- `cert-mongodb.jpg` - MongoDB Basics certificate
- `cert-reactpatterns.jpg` - Advanced React Patterns certificate
- `cert-cloud.jpg` - Cloud Architecture certificate

## Updating Content

To update the portfolio content with information from your CVs:

1. Update the Hero section in `src/components/Hero.tsx` with your tagline
2. Modify the About section in `src/components/About.tsx` with your professional summary
3. Update the Skills section in `src/components/Skills.tsx` with your actual skills
4. Replace project information in `src/components/Projects.tsx` with your real projects
5. Update the certificates in `src/app/certificates/page.tsx` with your actual certifications
6. Add your contact information in `src/components/Contact.tsx`

## File Structure
```
public/
└── images/
    ├── profile.jpg
    ├── about-profile.jpg
    ├── project-ecommerce.jpg
    ├── project-task.jpg
    ├── project-weather.jpg
    ├── project-analytics.jpg
    ├── project-fitness.jpg
    ├── project-recipe.jpg
    ├── cert-fullstack.jpg
    ├── cert-javascript.jpg
    ├── cert-react.jpg
    ├── cert-aws.jpg
    ├── cert-ux.jpg
    ├── cert-mongodb.jpg
    ├── cert-reactpatterns.jpg
    └── cert-cloud.jpg
```

## Adding Your CVs

Your CV files (Ammar Adel_CV1001.pdf and AmmarAdelCV.pdf) are currently in the root directory. 
You can move them to a `/public/docs` folder if you want to link to them from your portfolio.