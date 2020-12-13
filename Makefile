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
	go get -u golang.org/x/tools/cmd/goimports
	go get -u golang.org/x/lint/golint
