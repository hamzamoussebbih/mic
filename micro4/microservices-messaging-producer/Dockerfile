FROM openjdk:17

WORKDIR /App

COPY /target/messaging-0.0.1-SNAPSHOT.jar .

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "messaging-0.0.1-SNAPSHOT.jar"]