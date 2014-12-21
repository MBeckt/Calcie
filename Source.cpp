#include <iostream>


using namespace std;

int main(){
	short val = 5;
	&refVal = val;

	std::cin >> refVal;
	std::cout << val << std::endl; // Using MS Visual to write this but im debugging in codeblocks for simplicity.
}