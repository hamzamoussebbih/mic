FROM openjdk:17

WORKDIR /App

COPY /target/messaging-consumer-0.0.1-SNAPSHOT.jar .

EXPOSE 9111

ENTRYPOINT ["java", "-jar", "messaging-consumer-0.0.1-SNAPSHOT.jar"]