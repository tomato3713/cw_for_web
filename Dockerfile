FROM ubuntu:latest

RUN apt -y update
RUN apt -y install build-essential

RUN apt -y install golang

RUN mkdir -p workdir
WORKDIR  /workdir

CMD ["/bin/bash"]
