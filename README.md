# Text Operator 🚀  
**React • Docker • GitHub Actions • CI/CD**

Text Operator is a React-based web application that allows users to perform common text transformations and analysis.  
The project is fully containerized using Docker and deployed using an automated CI/CD pipeline with GitHub Actions.

---

## ✨ Features

- Convert text to **uppercase**
- Convert text to **lowercase**
- Remove **all extra spaces**
- Trim **leading and trailing spaces**
- Display **word count** and **character count**
- Estimate **reading time**
- Responsive and clean UI

---

## 🛠 Tech Stack

- **Frontend:** React
- **Containerization:** Docker (multi-stage build)
- **Web Server:** Nginx
- **CI/CD:** GitHub Actions
- **Container Registry:** Docker Hub

---

## 🧠 Project Architecture

```

React Source Code
↓
Docker Multi-stage Build
↓
Nginx (Production Server)
↓
Docker Image
↓
GitHub Actions (CI/CD)
↓
Docker Hub
↓
Running Container

````

---

## 🐳 Docker Setup

### Build the Docker image locally
```bash
docker build -t textoperator .
````

### Run the container

```bash
docker run -d -p 80:80 --name mytextoperator textoperator
```

Open in browser:

```
http://localhost
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

* Triggered on every push to the `main` branch
* Automatically:

  * Builds the Docker image
  * Logs into Docker Hub securely using GitHub Secrets
  * Pushes the image to Docker Hub

### Secrets Used

* `DOCKER_USER`
* `DOCKER_PASS` (Docker Hub Personal Access Token)

No secrets are committed to the repository.

---

## 📦 Docker Hub Image

Pull the image directly from Docker Hub:

```bash
docker pull prashant2496/mytextoperator:latest
```

---

## 🔐 Security Practices

* Docker credentials stored securely using **GitHub Secrets**
* No hard-coded secrets in code or workflows
* GitHub Secret Scanning & Push Protection enabled

---

## 📚 What I Learned

* React production build lifecycle
* Docker multi-stage builds
* CI/CD automation with GitHub Actions
* Secure secret management
* Debugging real-world CI/CD pipeline issues
* Container lifecycle management

---

## 🚀 Future Enhancements

* Deploy on AWS EC2
* Add HTTPS with Let’s Encrypt
* Integrate backend APIs (Node.js)
* Use Docker Compose for multi-service setup

---

## 👤 Author

**Prashant Narwade**
Aspiring Backend & DevOps Engineer
Learning by building 🚀
