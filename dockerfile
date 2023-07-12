FROM node:18-alpine

ENV PORT=3000

ENV REACT_APP_BASE_URL=http://server.deva.asia/
ENV REACT_APP_METADATA_RESUME=https://server.deva.asia/portfolio/metadata-resume
ENV REACT_APP_METADATA_SKILLS=https://server.deva.asia/portfolio/metadata-skills
ENV REACT_APP_METADATA_RECENT_PROJECTS=https://server.deva.asia/portfolio/recent-projects
ENV REACT_APP_METADATA_PROJECTS=https://server.deva.asia/portfolio/projects

WORKDIR /app

COPY . .

RUN npm install && npm install -g serve && npm run build

EXPOSE $PORT

ENTRYPOINT [ "serve", "build" ]