#pragma once 

#include <iostream>
#include <string>

#define COUT std::cout 
#define STDSTR std::string

class ATarget;

class ASpell {

	protected:
		STDSTR	_name;
		STDSTR	_effects;
	public:
		ASpell();
		ASpell(const ASpell&);
		ASpell(STDSTR name, STDSTR effects);
		ASpell & operator = (const ASpell&);
		virtual ~ASpell();

		const STDSTR& getName() const;
		const STDSTR& getEffects() const;

		ASpell * clone() const = 0;

		void launch(const ATarget& target) const;
		
};
