#include <iostream>

using namespace std;
short val = 6;

int main(){
	short val = 5;
	short &refVal = val;

	std::cin >> refVal;
	std::cout << ::val << std::endl; // Using MS Visual to write this but im debugging in codeblocks for simplicity.
	std::cout << val << std::endl;  // '::' Should mean that whilst :: is there val will = 6 no matter the input.

	extern int i;
	std::cout << i << std::endl; // This should bring the 'I' from the other document.
}