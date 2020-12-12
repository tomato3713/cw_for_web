test:
	go test -v 
build:
	go build ...
run:
	go run server.go router.go
fmt:
	goimports -w .
lint:
	go vet
setup:
	go get -u github.org/x/tools/cmd/goimports
	go get -u github.org/x/lint/golint
