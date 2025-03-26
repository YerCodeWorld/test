# Project To-Do List

## Completed
- [x] Setting up architecture and global structure
- [x] Building a comfortable homepage and setting up scalability
- [x] Set up i18n
- [x] Set up notifications system

## Errors and Warnings

- [ ] Deal with: "4 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6, lodash.get@4.4.2, rimraf@3.0.2
  "

## Pending Features
- [ x ] Routing system
- [ ] Authentication
- [ ] Database
- [ ] About page for showing formality information
- [ ] Admin page for controlling database and page management (including states and everything in general)

## Additional Tasks to Consider
- [ x ] **Responsive Design:** Ensure the UI is mobile-friendly and adapts to different devices.
- [ ] **Testing:**
    - [ ] Write unit tests for core functionalities.
    - [ ] Implement integration tests for critical flows.
- [ ] **CI/CD Pipeline:** Set up continuous integration/continuous deployment to automate testing and deployment.
- [ ] **Documentation:** Create technical documentation and user guides.
- [ ] **SEO Optimization:** Improve the site's SEO to boost discoverability.
- [ ] **Accessibility:** Audit and enhance accessibility features (ARIA roles, contrast, keyboard navigation, etc.).
- [ ] **Performance Optimization:** Implement performance monitoring and optimize loading times.
- [ ] **Security:**
    - [ ] Conduct a security audit.
    - [ ] Implement best practices for authentication and data handling.
- [ ] **Error Handling & Logging:** Set up centralized error handling and logging systems.


For when we get permissons errors from github:

```sh
eval "$(ssh-agent -s)"
echo "Will get paraphrase..."
ssh-add ~/Desktop/sshkeys/do_github
```