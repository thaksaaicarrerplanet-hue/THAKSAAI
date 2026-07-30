1. Ensure `react-helmet-async` is installed in `apps/frontend`.
2. Configure `apps/frontend/src/App.jsx` to include `<HelmetProvider>`.
3. Create `<SEO />` component (`apps/frontend/src/components/SEO/SEO.jsx`).
4. Verify SEO component creation by using `cat apps/frontend/src/components/SEO/SEO.jsx`.
5. Add `<SEO />` component with specific schemas to `HomePage`, `CoursesPage`, and `TrainingPage`.
6. Fix `variant="h1"` elements in `CoursesPage`, `FinalYearProjectsPage`, `WorkshopPage`, `BatchesPage`, `NotFound`, and `AccessDenied` by adding `component="h1"`.
7. Verify the `h1` fixes by viewing one of the files (e.g. `apps/frontend/src/pages/CoursesPage/CoursesPage.jsx`).
8. Add missing `alt` attributes to `<img>` and `<Box component="img">` tags via python script.
9. Verify `alt` attributes by using `git diff`.
10. Update the homepage hero subtitle in `apps/frontend/src/pages/HomePage/sections/HeroSection.jsx` to be more B2B focused.
11. Run `cd apps/frontend && npm run build && npm run lint` to verify regressions.
12. Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
