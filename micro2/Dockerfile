FROM openjdk:17

WORKDIR /App

COPY /target/spring-reservation-vol-0.0.1-SNAPSHOT.jar .

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "spring-reservation-vol-0.0.1-SNAPSHOT.jar"]