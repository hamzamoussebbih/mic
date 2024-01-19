FROM openjdk:17

WORKDIR /App

COPY /target/vol-0.0.1-SNAPSHOT.jar .

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "vol-0.0.1-SNAPSHOT.jar"]